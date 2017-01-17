<template>
    <div id="note-editor">
        <textarea :value="activeNoteText" @input="editNote" class="form-control">
    </textarea>
    </div>
</template>
<script>
    import { editNote } from '../vuex/action.js';

    export default {
        vuex: {
            getters: {
                activeNoteText: state => state.activeNote.text
            },
            actions: {
                editNote
            }
        }
    }
</script>