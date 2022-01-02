<template>
    <h2>Pipeline Status: {{pipelineStatus}}</h2>
</template>
<script>
import config from '../config';

export default {
    data() {
        return {
            pipelineStatus: 'Pending',
            intervalId: null
        }
    },
    computed: {
        pipelineRunId() {
            return this.$route.params.pipelineRunId;
        }
    },
    async mounted() {
        this.intervalId = setInterval(() => this.getStatus(), 3000);
    },
    methods: {
        async getStatus() {
            try {
                const response = await fetch(`${config.backendUrl}/upload/pipeline-status/${this.pipelineRunId}`);
                const result = await response.json();
                this.pipelineStatus = result.status;

                if (this.pipelineStatus !== 'Pending') {
                    clearInterval(this.intervalId);
                }
            } catch (error) {
                clearInterval(this.intervalId);
            }
        }
    },
    destroyed() {
        clearInterval(this.intervalId);
    }
}
</script>