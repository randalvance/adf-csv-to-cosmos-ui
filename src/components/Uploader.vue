<template>
    <uploader :options="options" class="uploader"
              @upload-start="onUploadStart"
              @complete="onComplete"
              @file-error="onFileError"
              @file-progress="onFileProgress"
              ref="uploader">
        <uploader-drop>
            <p>Drop files here to upload or</p>
            <uploader-btn single>Browse File</uploader-btn>
        </uploader-drop>
        <uploader-list></uploader-list>
    </uploader>
</template>
<script>
import config from '../config';

export default {
    data: function() {
        return {
            isUploading: false,
            error: '',
            options: {
                target: `${config.backendUrl}/upload`
            }
        }
    },
    methods: {
        onUploadStart() {
            this.isUploading = true
        },
        onComplete() {
            this.isUploading = false
        },
        onFileError(_rootFile, _file, message) {
            this.isUploading = false
            this.error = message
        },
        onFileProgress() {
            console.log(this.$refs.uploader.uploader.progress())
        }
    }
}
</script>
<style scoped>
  .uploader {
    width: 880px;
    padding: 15px;
    margin: 40px auto 0;
    font-size: 12px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .4);
  }
  .uploader .uploader-btn {
    margin-right: 4px;
  }
  .uploader .uploader-list {
    max-height: 440px;
    overflow: auto;
    overflow-x: hidden;
    overflow-y: auto;
  }
</style>