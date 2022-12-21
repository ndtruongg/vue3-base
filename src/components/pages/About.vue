<template>
  <div id="my-toolbar">
    <span class="ql-formats">
      <select class="ql-size">
        <option selected>段落</option>
        <option value="huge">見出し1</option>
        <option value="large">見出し2</option>
        <option value="small">小さい</option>
      </select>
    </span>

    <span class="ql-formats inline-flex flex-center">
      <button type="button" class="ql-bold"></button>
      <span class="ql-formats-separator"></span>
      <button type="button" class="ql-italic"></button>
      <span class="ql-formats-separator"></span>
      <button type="button" class="ql-underline"></button>
      <span class="ql-formats-separator"></span>
      <button type="button" class="ql-strike"></button>
    </span>

    <span class="ql-formats">
      <select class="ql-color">
        <option selected></option>
        <option value="#e60000"></option>
        <option value="#ff9900"></option>
        <option value="#ffff00"></option>
        <option value="#008a00"></option>
        <option value="#0066cc"></option>
        <option value="#9933ff"></option>
        <option value="#ffffff"></option>
        <option value="#facccc"></option>
        <option value="#ffebcc"></option>
        <option value="#ffffcc"></option>
        <option value="#cce8cc"></option>
        <option value="#cce0f5"></option>
        <option value="#ebd6ff"></option>
        <option value="#bbbbbb"></option>
        <option value="#f06666"></option>
        <option value="#ffc266"></option>
        <option value="#ffff66"></option>
        <option value="#66b966"></option>
        <option value="#66a3e0"></option>
        <option value="#c285ff"></option>
        <option value="#888888"></option>
        <option value="#a10000"></option>
        <option value="#b26b00"></option>
        <option value="#b2b200"></option>
        <option value="#006100"></option>
        <option value="#0047b2"></option>
        <option value="#6b24b2"></option>
        <option value="#444444"></option>
        <option value="#5c0000"></option>
        <option value="#663d00"></option>
        <option value="#666600"></option>
        <option value="#003700"></option>
        <option value="#002966"></option>
        <option value="#3d1466"></option>
      </select>

      <select class="ql-background">
        <option value="#000000"></option>
        <option value="#e60000"></option>
        <option value="#ff9900"></option>
        <option value="#ffff00"></option>
        <option value="#008a00"></option>
        <option value="#0066cc"></option>
        <option value="#9933ff"></option>
        <option selected></option>
        <option value="#facccc"></option>
        <option value="#ffebcc"></option>
        <option value="#ffffcc"></option>
        <option value="#cce8cc"></option>
        <option value="#cce0f5"></option>
        <option value="#ebd6ff"></option>
        <option value="#bbbbbb"></option>
        <option value="#f06666"></option>
        <option value="#ffc266"></option>
        <option value="#ffff66"></option>
        <option value="#66b966"></option>
        <option value="#66a3e0"></option>
        <option value="#c285ff"></option>
        <option value="#888888"></option>
        <option value="#a10000"></option>
        <option value="#b26b00"></option>
        <option value="#b2b200"></option>
        <option value="#006100"></option>
        <option value="#0047b2"></option>
        <option value="#6b24b2"></option>
        <option value="#444444"></option>
        <option value="#5c0000"></option>
        <option value="#663d00"></option>
        <option value="#666600"></option>
        <option value="#003700"></option>
        <option value="#002966"></option>
        <option value="#3d1466"></option>
      </select>
    </span>

    <span class="ql-formats inline-flex flex-center">
      <button type="button" class="ql-list" value="ordered"></button>
      <span class="ql-formats-separator"></span>
      <button type="button" class="ql-list" value="bullet"></button>
      <span class="ql-formats-separator"></span>
      <select class="ql-align">
        <option selected></option>
        <option value="center"></option>
        <option value="right"></option>
        <option value="justify"></option>
      </select>
    </span>

    <span class="ql-formats inline-flex flex-center">
      <button type="button" class="ql-link"></button>
      <button type="button" class="ql-image"></button>
    </span>
  </div>
  <div ref="editor"></div>
</template>
<script>
import Quill from 'quill';
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.bubble.css';
import 'quill/dist/quill.snow.css';

export default {
  props: {
    modelValue: {
      type: String,
      default: '<h3>Hello world</h3>',
    },
  },
  data() {
    return {
      editor: null,
    };
  },
  mounted() {
    var _this = this;

    this.editor = new Quill(this.$refs.editor, {
      modules: {
        toolbar: '#my-toolbar',
      },
      theme: 'snow',
      placeholder: 'Type something in here!',
    });
    this.editor.root.innerHTML = this.modelValue;
    this.editor.on('text-change', function () {
      return _this.update();
    });
  },

  methods: {
    update: function update() {
      this.$emit(
        'update:modelValue',
        this.editor.getText() ? this.editor.root.innerHTML : ''
      );
    },

    insertImageElement() {
      const length = this.editor.getLength();
      const textImg = `<img src="http://cdn.myanimelist.net/images/characters/5/136769.jpg" width="150" class="slideImage ${length}" data-xblocker="passed">`;
      var range = this.editor.getSelection();
      this.editor.insertText(range?.length || 0, '$___$');
      let nowContent = this.editor.root.innerHTML;
      nowContent = nowContent.replaceAll('$___$', textImg);
      this.editor.root.setHTML(nowContent);
      this.editor.setSelection(range.index + 1, length);
    },
  },
};
</script>
