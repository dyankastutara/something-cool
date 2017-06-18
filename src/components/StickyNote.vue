<template lang="html">
  <div>
    <div>
      <Menu @addNote="addNote"></Menu>
    </div>
    <div class="sticky">
    <div v-for="(note, index) in notes" :key="index">
      <Card class="card" >
        <button slot="title" v-if="note.lock == true" @click="unlockNote (note)">
          <Tooltip content="Unlock Note" placement="top-start">
            <i class="lock icon"></i>
          </Tooltip>
        </button>
        <button slot="title" v-if="note.lock == false" @click="lockNote (note)">
          <Tooltip content="Lock Note" placement="top-start" >
            <i class="unlock icon"></i>
          </Tooltip>
        </button>
        <button slot="extra" @click="addNote">
          <Tooltip content="Add Note" placement="top-start">
            <i class="plus icon"></i>
          </Tooltip>
        </button>
        <button slot="extra" @click="deleteNote (note)">
          <Tooltip content="Delete Note" placement="top-start">
            <i class="delete icon"></i>
          </Tooltip>
        </button>
        <div>
          <textarea rows="5" v-model="note.text" v-bind:readonly="note.lock" v-on:change="changeInput (note)"></textarea>
        </div>
      </Card>
    </div>
    </div>
  </div>
</template>

<script>
import * as firebase from 'firebase'
import Menu from './Menu'

const config = {
  apiKey: 'AIzaSyCyk947qCZTKDMBS7YzAbvqDvsOO1hvh9E',
  authDomain: 'learning-firebase-cc7c8.firebaseapp.com',
  databaseURL: 'https://learning-firebase-cc7c8.firebaseio.com/',
  messagingSenderId: '1083847933465'
}
const firebaseApp = firebase.initializeApp(config)
const db = firebaseApp.database()
const notesRef = db.ref('notes')

export default {
  components: {
    Menu
  },
  firebase: {
    notes: notesRef
  },
  data () {
    return {
      text: '',
      lock: false
    }
  },
  methods: {
    addNote () {
      var self = this
      var data = {
        text: self.text,
        lock: self.lock
      }
      notesRef.push(data)
    },
    deleteNote (note) {
      this.$firebaseRefs.notes.child(note['.key']).remove()
    },
    lockNote (note) {
      notesRef.child(note['.key'])
      .child('lock')
      .set(true)
    },
    unlockNote (note) {
      notesRef.child(note['.key'])
      .child('lock')
      .set(false)
    },
    changeInput (note) {
      notesRef.child(note['.key'])
      .child('text')
      .set(note.text)
    }
  }
}
</script>

<style lang="css" scoped>
button{
  text-decoration: none;
  background-color: transparent;
  border: none;
  color: black;
}
textarea{
  width: 100%;
  border-radius: 2px;
}
.sticky{
  display: flex;
  flex-wrap: wrap;
  margin-left: 80px;
  margin-top: 40px;
}
.card{
  width : 310px;
  height: auto;
  margin-left: 5px;
  margin-bottom: 5px;
  border-radius: 2px;
}

.center{
  width: 300px;
  margin: 10px auto;
  overflow: hidden;
}
.center-left{
  float: left;
}
.center-right{
  float: right;
}
</style>
