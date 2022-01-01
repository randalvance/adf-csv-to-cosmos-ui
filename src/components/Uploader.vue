<template>
    <uploader :options="options" class="uploader">
        <uploader-unsupport></uploader-unsupport>
        <uploader-drop>
            <p>Drop Files Here to Upload</p>
            <uploader-btn>Select Files</uploader-btn>
        </uploader-drop>
    </uploader>
</template>
<script>

export default {
    data: function() {
        return {
            options: {
                target: 'https://localhost:7171/upload'
            }
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