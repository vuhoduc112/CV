import { TextField } from '@shopify/polaris';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const FormOne = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
         fetch('https://api.example.com', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => console.error('Error:', error));
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{width: '50%', padding: '20px'}}>
            <h1>General</h1>
            <Controller
                control={control}
                name="campaign"
                rules={{ required: 'Không được để trống ô Campaign' }}
                
                render={({ field }) => (
                    <TextField
                        label="Campaign"
                        value={field.value}
                        onChange={field.onChange}
                        error={errors.campaign && errors.campaign.message}
                    />
                )}
            />
            <Controller
                control={control}
                name="title"
                render={({ field }) => (
                    <TextField
                        label="Title"
                        value={field.value}
                        onChange={field.onChange}
                    />
                )}
            />
            <Controller
                control={control}
                name="desc"
                render={({ field }) => (
                    <TextField
                        label="Description"
                        value={field.value}
                        onChange={field.onChange}
                    />
                )}
            />
            <input
                type="submit"
                style={{
                    height: '50px',
                    width: '100px',
                    backgroundColor: 'orangered',
                    border: 'none',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    color: '#fff',
                    marginTop: '20px'
                }}
            />
        </form>
    );
};

export default FormOne;
