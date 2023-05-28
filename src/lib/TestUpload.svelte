<script>
	let img = null;
	let message = '';
	import { page } from '$app/stores';
	const churchId = $page.params.churchId;
  import { goto } from '$app/navigation';

	import { churchviewService } from '../services/churchview-service';

	async function deleteImage() {
		const success = await churchviewService.deleteImage(churchId);

	}

	async function handleFileChange(event) {
		const file = event.target.files[0];
		if (file) {
			img = file;
		}
		console.log(img);
	}

	async function handleUpload() {
		if (!img) {
			console.log('No file selected');
			return;
		}

		const formData = new FormData();

		console.log([...formData]);

		formData.append('imagefile', img);

		console.log([...formData]);

		// const imagefile = {
		//    imagefile: formData.get('image')
		// }

		// console.log(imagefile)

		const success = await churchviewService.uploadImage(churchId, formData);
    goto('/churchlist/' +churchId);

		if (!success) {
			message = 'Image not added - some error occurred';
			return;
		}
		message = `Thanks! for contributing to the churchViews app`;
    


		// try {
		//   const formData = new FormData();
		//   formData.append('file', img);

		//   const response = await churchviewService.uploadImage(churchId , imagefile) {
		//     method: 'POST',
		//     body: formData,
		//   });

		//   if (response.ok) {
		//     const data = await response.json();
		//     console.log('Upload successful:', data);
		//     // Perform any additional actions upon successful upload
		//   } else {
		//     throw new Error('Upload failed');
		//   }
		// } catch (error) {
		//   console.error('Upload error:', error);
		//   // Handle upload error as needed
		// }
	}
</script>


	<div class="card-content">
		<form on:submit|preventDefault={handleUpload} enctype="multipart/form-data">
			<input
				bind:files={img}
				name="imagefile"
				type="file"
				accept="image/png , image/jpeg"
				id="imagefile"
				on:change={handleFileChange}
			/>
			<button class="button is-link is-light">Add Image</button>
		</form>
		<button on:click={deleteImage}>delete image</button>
	</div>

