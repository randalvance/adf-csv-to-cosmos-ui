<template>
    <h2>Pipeline Status: {{pipelineStatus}}</h2>
</template>
<script>
import config from '../config';

export default {
    data() {
        return {
            pipelineStatus: 'Queued',
            intervalId: null
        }
    },
    computed: {
        pipelineRunId() {
            return this.$route.params.pipelineRunId;
        }
    },
    async mounted() {
        this.intervalId = setInterval(() => this.getStatus(), 10000);
    },
    methods: {
        async getStatus() {
            try {
                const response = await fetch(`${config.backendUrl}/upload/pipeline-status/${this.pipelineRunId}`);
                const result = await response.json();
                this.pipelineStatus = result.status;
                
                if (this.pipelineStatus === 'Succeeded') {
                    this.$router.push({ path: `/data/${this.pipelineRunId}` });
                } else if (this.pipelineStatus !== 'InProgress') {
                    clearInterval(this.intervalId);
                } 
            } catch (error) {
                this.pipelineStatus = 'Error: Pipeline Not Found';
                clearInterval(this.intervalId);
            }
        }
    },
    destroyed() {
        clearInterval(this.intervalId);
    }
}
</script>