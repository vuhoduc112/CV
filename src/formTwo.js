import { Page, DataTable } from '@shopify/polaris';
import React from 'react';


const FormTwo = ({formValues }) => {
     console.log('formValues', formValues);
    const formatAmount = (type, amount) => {
        switch (type) {
            case 'None':
                return '';
            case 'discount':
                return `${amount}%`;
            case 'discount-each':
                return `${amount}$`;
            default:
                return amount;
        }
    };

    const formattedRows = formValues.map(formValue => {
      const { Title, DiscountType, quantity, amount } = formValue;
      return [Title, DiscountType, quantity, formatAmount(DiscountType, amount)];
  });

    return (
        <div>
            <h1>Previrew</h1>
           <div>
            <h2>Buy more and save</h2>
           <Page title="apply for all product in store">
                <DataTable
                    columnContentTypes={['text', 'text', 'numeric', 'numeric']}
                    headings={['Title', 'Discount Type', 'Quantity', 'Amount']}
                    rows={formattedRows}
                />
            </Page>
           </div>
        </div>
    );
}

export default FormTwo;
