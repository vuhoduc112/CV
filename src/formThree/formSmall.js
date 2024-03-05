import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Select } from '@shopify/polaris';

const FormSmall = ({ onSubmit }) => {
    const [selected, setSelected] = useState('None');

    const {
        handleSubmit,
        control,
        watch,
        formState: { errors },
    } = useForm();

    const options = [
        { label: 'None', value: 'None' },
        { label: '%discount', value: 'discount' },
        { label: 'Discount / each', value: 'discount-each' },
    ];

    const discountType = watch('DiscountType');

    const formSubmit = (data) => {
        onSubmit(data);
    };

    return (
        <form onSubmit={handleSubmit(formSubmit)} style={{ height: '400px' }}>
            <div>
                <div>
                    <Controller
                        control={control}
                        name="Title"
                        rules={{ required: 'Không được để trống ô Title' }}
                        render={({ field }) => (
                            <TextField
                                label="Title"
                                value={field.value}
                                onChange={field.onChange}
                                error={errors.Title && errors.Title.message}
                            />
                        )}
                    />

                    <Controller
                        control={control}
                        name="Subtitle"
                        render={({ field }) => (
                            <TextField label="Subtitle" value={field.value} onChange={field.onChange} />
                        )}
                    />

                    <Controller
                        control={control}
                        name="Label"
                        render={({ field }) => (
                            <TextField label="Label (optional)" value={field.value} onChange={field.onChange} />
                        )}
                    />
                    <Controller
                        control={control}
                        name="quantity"
                        rules={{ required: 'Không được để trống ô quantity',  pattern: {
                            value: /^[0-9]*$/,
                            message: 'Chỉ được nhập số',
                        } }}
                        render={({ field }) => (
                            <TextField
                                label="Quantity"
                                value={field.value}
                                onChange={field.onChange}
                                error={errors.Quantity && errors.Quantity.message}
                            />
                        )}
                    />
                    <Controller
                        control={control}
                        name="DiscountType"
                        rules={{ required: 'Không được để trống ô DiscountType' }}
                        render={({ field }) => (
                            <Select
                                label="DiscountType"
                                options={options}
                                onChange={(value) => {
                                    field.onChange(value);
                                    setSelected(value);
                                }}
                                value={field.value}
                            />
                        )}
                    />

                    {(discountType === 'discount' || discountType === 'discount-each') && (
                        <Controller
                            control={control}
                            name="amount"
                            rules={{ required: 'Không được để trống ô amount',  pattern: {
                                value: /^[0-9]*$/,
                                message: 'Chỉ được nhập số',
                            }, }}
                            render={({ field }) => (
                                <TextField
                                    label="amount"
                                    value={field.value}
                                    onChange={field.onChange}
                                    autoComplete="off"
                                    error={errors.amount && errors.amount.message}
                                />
                            )}
                        />
                    )}
                </div>
            </div>
            <button type="submit" style={{marginTop: '50px', width: '100%', backgroundColor: 'green', color: '#fff', padding: '8px', border: 'none', borderRadius: '8px', cursor: 'pointer'}}>Save</button>
        </form>
    );
};

export default FormSmall;
