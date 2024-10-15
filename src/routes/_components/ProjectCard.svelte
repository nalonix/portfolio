<script lang="ts">
	import { Button } from "bits-ui";

    export let project;

    console.log("This is Project Card")

</script>
 

<div>
    {project.title}
    <div>
        <Button.Root on:click={()=> console.log("I like this app")} class="primary-button font-light">
            Like It
        </Button.Root>
    </div>
</div>