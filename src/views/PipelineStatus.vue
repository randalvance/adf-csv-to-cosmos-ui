<template>
    <h2>Pipeline Status: {{pipelineStatus}}</h2>
</template>
<script>
import config from '../config';

export default {
    data() {
        return {
            pipelineStatus: 'Pending'
        }
    },
    async mounted() {
        const pipelineRunId = this.$route.params.pipelineRunId;
        const response = await fetch(`${config.backendUrl}/upload/pipeline-status/${pipelineRunId}`);
        const result = await response.json();

        this.pipelineStatus = result.status;
    },
}
</script>