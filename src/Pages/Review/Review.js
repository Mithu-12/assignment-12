import React from 'react';
import Rating from '@mui/material/Rating';
import useFirebase from '../../Hook/useFirebase';
import { useForm } from 'react-hook-form';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import './Review.css'

const Review = () => {
    let [value, setValue] = React.useState(2);
    const {user} = useFirebase();
    const {
        formState: { errors },
        register,
        handleSubmit,
        reset } = useForm();
    let ret = value;

    const onSubmit = (data) => {
        data.rate = ret;
        console.log(data)
        fetch('https://rocky-dawn-87593.herokuapp.com/review', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data),
        })
            .then(res => {
                alert("added succesfully")
                console.log(res);
                reset(res);
        })
    }
    
    console.log(value)

    return (
        <div>
            <div className="add-service" style={{width: '60%', alignItems: 'center',}}>
                <h3>Please Type About Us</h3>
               
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("name", { required: true} )} defaultValue={user?.displayName} />
                        
                        <input {...register("email", { required: true })} defaultValue={user?.email} />
                        {/* <Box>Please Type About Us MaxLength 50 Word </Box> */}
                        <textarea {...register("Description", { required: true, maxLength: 50})} placeholder="Please Type About Us MaxLength 50 Word" />
                    <Box
                         sx={{
                    '& > legend': { mt: 2 },
                    }}
                    >
                     <Typography component="legend">Please rating us</Typography>
                        <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                        setValue(newValue);
                        }}
                    />
                    </Box>
                            <input type="submit" />
                    </form>
             </div>
        </div>
    );
};

export default Review;