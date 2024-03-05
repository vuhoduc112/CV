import React, { useState } from 'react';
import FormSmall from './formSmall';
import { Icon } from '@shopify/polaris';
import { DeleteIcon } from '@shopify/polaris-icons';
import { PlusCircleIcon } from '@shopify/polaris-icons';
import FormTwo from '../formTwo';
const FormThree = () => {
    const [formCount, setFormCount] = useState(1);

    const addForm = () => {
        setFormCount(formCount + 1);
        setFormValues([])
    };

    const deleteForm = (index) => () => {
        setFormCount(formCount - 1);
        setFormValues([])
    };

    const [formValues, setFormValues] = useState([]);

    const addFormValue = (value) => {
        setFormValues([...formValues, value]);
    };

    return (
        <div style={{ display: 'flex', width: '100%', margin: '50px', justifyContent: 'space-around' }}>
            <div>
                {Array.from({ length: formCount }, (_, index) => (
                    <div key={index}>
                        <h1
                            style={{
                                backgroundColor: 'orangered',
                                color: '#fff',
                                fontSize: '18px',
                                padding: '8px',
                                width: '120px',
                            }}
                        >
                            OPTION {index + 1}
                        </h1>
                        <div style={{ marginLeft: '300px' }} onClick={deleteForm(index)}>
                            <Icon source={DeleteIcon} />
                        </div>
                        <FormSmall onSubmit={addFormValue} />
                    </div>
                ))}
                <button
                    style={{
                        display: 'flex',
                        margin: '20px 0',
                        width: '100%',
                        backgroundColor: 'orangered',
                        color: '#fff',
                        padding: '8px',
                        border: 'none',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    onClick={addForm}
                >
                    <div>
                        <Icon source={PlusCircleIcon} />
                    </div>{' '}
                    <div>ADD option</div>
                </button>
            </div>

            <div>
                <FormTwo formValues={formValues} />
            </div>
        </div>
    );
};

export default FormThree;
