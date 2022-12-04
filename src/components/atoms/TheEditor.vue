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
        <option selected="selected"></option>
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
        <option selected="selected"></option>
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
        <option selected="selected"></option>
        <option value="center"></option>
        <option value="right"></option>
        <option value="justify"></option>
      </select>
    </span>

    <span class="ql-formats inline-flex flex-center">
      <button type="button" class="ql-link"></button>

      <span class="ql-formats-separator"></span>
      <button type="button" class="qle-custom">
        <i class="fa fa-file-video-o"></i>
        再生位置挿入
      </button>
      <span class="ql-formats-separator"></span>

      <button type="button" class="qle-custom">
        <i class="fa fa-picture-o"></i>
        資料挿入
      </button>
      <span class="ql-formats-separator"></span>

      <button type="button" class="qle-custom">筆記アシスト</button>
      <div class="qle-custom assist disabled">
        <button
          type="button"
          :class="['assist-option', isWritingAssist ? 'assist-active' : '']"
          @click="toggleWritingAssist(true)"
        >
          on
        </button>
        <button
          type="button"
          :class="['assist-option', !isWritingAssist ? 'assist-active' : '']"
          @click="toggleWritingAssist(false)"
        >
          off
        </button>
      </div>
    </span>
  </div>

  <QuillEditor
    ref="quillEditorRef"
    v-model:content="content"
    theme="snow"
    toolbar="#my-toolbar"
    @update:content="updateContent"
    @ready="initQuill"
  />
</template>

<script setup>
import { ref, defineProps, defineEmits, onMounted } from 'vue';
import { QuillEditor } from '@vueup/vue-quill';
import '@vueup/vue-quill/dist/vue-quill.snow.css';

const props = defineProps({
  modelValue: String,
});

const emits = defineEmits(['update:modelValue']);
const content = ref('');
const quillEditorRef = ref({});
const quillEditor = ref(null);
const isWritingAssist = ref(false);
const toggleWritingAssist = (val) => {
  isWritingAssist.value = val;
};

const initQuill = (quill) => {
  quillEditor.value = quill;
};

const updateContent = (newContent) => {
  newContent = quillEditorRef.value.getHTML(newContent);
  emits('update:modelValue', newContent);
};

onMounted(() => {
  quillEditorRef.value.setHTML(props.modelValue);
});
</script>

<style lang="scss">
// Override
.ql-snow {
  &.ql-toolbar {
    padding: 4px;

    button {
      &:hover {
        background-color: transparent;
        color: #2563eb;
      }

      &.ql-active {
        background-color: transparent;
      }
    }

    .ql-picker-label {
      &:hover,
      &.ql-active {
        background-color: transparent;
      }
    }
  }

  .ql-icon-picker {
    .ql-picker-options {
      padding: 0;
    }
  }

  .ql-formats {
    &.inline-flex {
      @extend .inline-flex;
    }

    &.flex-center {
      @extend .flex-center;
    }
  }

  .ql-picker.ql-size {
    .ql-picker-item[data-value='huge']::before,
    .ql-picker-item[data-value='large']::before,
    .ql-picker-item[data-value='small']::before {
      font-size: 14px;
    }
  }
}

.inline-flex {
  display: inline-flex;
}

.flex-center {
  align-items: center;
  justify-content: center;
}

.ql-formats {
  &-separator {
    display: inline-block;
    height: 14px;
    width: 1px;
    margin-left: 4px;
    margin-right: 4px;
    vertical-align: middle;
    background-color: #ddd;
  }
}

.ql-snow {
  &.ql-toolbar {
    button.qle-custom {
      width: unset;
    }

    .assist {
      display: inline-block;
      border: 1px solid #ddd;
      background: #fff;
      border-radius: 3px;
      padding: 2px;

      &-option {
        display: inline-block;
        width: 40px;
        padding: 3px;
        border-radius: 2px;
        font-size: 12px;
        font-weight: bold;
        cursor: pointer;
        text-align: center;
        text-transform: uppercase;

        &.assist-active {
          color: #fff;
          pointer-events: none;
          cursor: default;
          background: rgb(30, 30, 30);
        }
      }
    }
  }
}
</style>
