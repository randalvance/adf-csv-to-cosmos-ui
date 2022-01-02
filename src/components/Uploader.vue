<template>
    <uploader :options="options" class="uploader">
        <uploader-drop>
            <p>Drop files here to upload or</p>
            <uploader-btn :attrs="attrs" single>Browse File</uploader-btn>
        </uploader-drop>
        <uploader-list></uploader-list>
    </uploader>
</template>
<script>
import config from '../config';
import { v4 as uuid } from 'uuid';

export default {
    data: function() {
        return {
            options: {
                target: `${config.backendUrl}/upload`,
                testChunks: false,
                chunkSize: 10, // Upload in chunks of 10mb
                generateUniqueIdentifier: () => uuid()
            },
            attrs: {
                accept: '.csv'
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