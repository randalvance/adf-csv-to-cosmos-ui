<template>
    <div>
        <h2>Data Viewer</h2>
        <div class="container">
            <div class="data">
                <h3>Imported Data</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Seq</th>
                            <th>First</th>
                            <th>Last</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in items" :key="item.seq">
                            <td>{{item.seq}}</td>
                            <td>{{item.first}}</td>
                            <td>{{item.last}}</td>
                            <td>{{item.gender}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="data errors">
                <h3>Data With Errors</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Seq</th>
                            <th>First</th>
                            <th>Last</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in errors" :key="item.seq">
                            <td>{{item.seq}}</td>
                            <td>{{item.first}}</td>
                            <td>{{item.last}}</td>
                            <td>{{item.gender}}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
import config from '../config';

export default {
    data() {
        return {
            items: [],
            errors: []
        }
    },
    computed: {
        pipelineRunId() {
            return this.$route.params.pipelineRunId;
        }
    },
    async mounted() {
        await this.getData();
    },
    methods: {
        async getData() {
            const response = await fetch(`${config.backendUrl}/upload/pipeline-status/${this.pipelineRunId}`);
            const result = await response.json();

            this.items = result.items;
            this.errors = result.errors;
        }
    }
}
</script>
<style scoped>
.container {
    display: flex;
}
.data {
    flex: 1;
    padding: 10px;
}

.data table {
    width: 100%;
    border: 1px solid black;
    border-collapse: collapse;
}

.data table th, .data table td {
    border: 1px solid black;
}
.data table th {
    background-color: rgb(75, 110, 226);
    color: white;
}
.data.errors table th {
    background-color: rgb(226, 75, 75);
    color: white;
}
</style>