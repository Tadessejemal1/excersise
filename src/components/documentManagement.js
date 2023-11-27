import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CKEditorWrapper from './ckEditors';

const DocumentManagementComponent = () => {
  const [documentData, setDocumentData] = useState({
    title: '',
    content: '',
  });

  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    // Fetch the user's documents on component mount
    fetchDocuments();
  }, []);

  const fetchDocuments = async () => {
    try {
      const response = await axios.get('/api/documents');
      setDocuments(response.data);
    } catch (error) {
      console.error('Error fetching documents:', error.response.data.message);
    }
  };

  const handleInputChange = (e) => {
    setDocumentData({ ...documentData, [e.target.name]: e.target.value });
  };

  const handleCreateDocument = async () => {
    try {
      const response = await axios.post('/api/documents/create', documentData);
      console.log(response.data.message);
      // Refresh the documents list after creating a new document
      fetchDocuments();
    } catch (error) {
      console.error('Document creation failed:', error.response.data.message);
    }
  };

  const handleUpdateDocument = async (id) => {
    try {
      const response = await axios.put(`/api/documents/update/${id}`, documentData);
      console.log(response.data.message);
      fetchDocuments();
    } catch (error) {
      console.error('Document update failed:', error.response.data.message);
    }
  };

  const handleDeleteDocument = async (id) => {
    try {
      const response = await axios.delete(`/api/documents/delete/${id}`);
      console.log(response.data.message);
      fetchDocuments();
    } catch (error) {
      console.error('Document deletion failed:', error.response.data.message);
    }
  };

  return (
    <div>
      <h2>Document Management</h2>
      <label>Title:</label>
      <input type="text" name="title" onChange={handleInputChange} />
      <br />
      <label>Content:</label>
      <CKEditorWrapper
        data={documentData.content}
        onChange={(event, editor) => {
          setDocumentData({ ...documentData, content: editor.getData() });
        }}
      />
      <br />
      <button onClick={handleCreateDocument}>Create Document</button>
      <br />
      <h3>Documents List</h3>
      <ul>
        {documents.map((doc) => (
          <li key={doc.id}>
            <strong>{doc.title}</strong>
            <p>{doc.content}</p>
            <button onClick={() => handleUpdateDocument(doc.id)}>Update</button>
            <button onClick={() => handleDeleteDocument(doc.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DocumentManagementComponent;
