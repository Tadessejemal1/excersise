// ckeditor.js
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import CKEditor from '@ckeditor/ckeditor5-react';

const CKEditorWrapper = ({ data, onChange }) => {
  return (
    <CKEditor
      editor={ClassicEditor}
      data={data}
      onChange={(event, editor) => {
        if (onChange) onChange(event, editor);
      }}
    />
  );
};

export default CKEditorWrapper;
