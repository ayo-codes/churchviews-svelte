<script>
  let selectedFile = null;

  async function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      selectedFile = file;
    }
  }

  async function handleUpload() {
    if (!selectedFile) {
      console.log('No file selected');
      return;
    }

    try {
      const formData = new FormData();
      formData.append('file', selectedFile);

      const response = await fetch('your-upload-endpoint', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Upload successful:', data);
        // Perform any additional actions upon successful upload
      } else {
        throw new Error('Upload failed');
      }
    } catch (error) {
      console.error('Upload error:', error);
      // Handle upload error as needed
    }
  }
</script>

<main>
  <input type="file" on:change={handleFileChange} />

  <button on:click={handleUpload}>Upload</button>
</main>
