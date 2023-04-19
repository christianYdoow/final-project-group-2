import { useState } from 'react';

interface ProductFormValues {
  productName: string;
  productDescription: string;
  productQuantity: number;
  productPrice: number;
  productImage: File | null;
  status: string;
  csv: File | null;
}

const ProductForm = () => {
  const [formValues, setFormValues] = useState<ProductFormValues>({
    productName: '',
    productDescription: '',
    productQuantity: 0,
    productPrice: 0,
    productImage: null,
    status: 'active',
    csv: null,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setFormValues((prevValues) => ({
      ...prevValues,
      productImage: file,
    }));
  };

  const handleFileChangeCsv = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setFormValues((prevValues) => ({
      ...prevValues,
      csv: file,
    }));
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const formData = new FormData();
      formData.append('file', formValues.productImage as File);
      formData.append('imageName', formValues.productImage?.name || '');
      formData.append('productName', formValues.productName);
      formData.append('productDescription', formValues.productDescription);
      formData.append('productQuantity', String(formValues.productQuantity));
      formData.append('productPrice', String(formValues.productPrice));
      formData.append('status', formValues.status);

      await fetch('http://localhost:8080/web/api/admin/add-product', {
        method: 'POST',
        body: formData,
      });
      
      // handle successful submission
    } catch (error) {
      // handle error
    }
  };

  const handleSubmitCsv = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    try {
      const formData = new FormData();
      formData.append('file', formValues.csv as File);
  
      await fetch('http://localhost:8080/web/api/admin/add-product-file', {
        method: 'POST',
        body: formData,
      });
        
      // handle successful submission
    } catch (error) {
      // handle error
    }
  };

  return (
    <div>

    
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <label htmlFor="productName">Product Name:</label>
      <input type="text" id="productName" name="productName" value={formValues.productName} onChange={handleInputChange} required />

      <label htmlFor="productDescription">Product Description:</label>
      <textarea id="productDescription" name="productDescription" value={formValues.productDescription} onChange={handleInputChange} required />

      <label htmlFor="productQuantity">Product Quantity:</label>
      <input type="number" id="productQuantity" name="productQuantity" value={formValues.productQuantity} onChange={handleInputChange} required />

      <label htmlFor="productPrice">Product Price:</label>
      <input type="number" id="productPrice" name="productPrice" value={formValues.productPrice} onChange={handleInputChange} required />

      <label htmlFor="status">Status:</label>
      <select id="status" name="status" value={formValues.status} onChange={handleSelectChange} required>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <label htmlFor="productImage">Product Image:</label>
      <input type="file" id="productImage" name="productImage" onChange={handleFileChange} accept="image/*" required />

      <button type="submit">Submit</button>
    </form>

      <form onSubmit={handleSubmitCsv} encType="multipart/form-data">
    <label htmlFor="csv">CSV:</label>
    <input type="file" id="csv" name="csv" accept=".csv" onChange={handleFileChangeCsv} required />

    <button type="submit">Submit</button>
    </form>

    </div>
  );
};

export default ProductForm;