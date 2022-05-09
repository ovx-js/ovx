import { defineComponent, onMounted } from 'vue';
import { ElMessage } from 'element-plus';
import HelloWorld from '../components/HelloWorld';
import logo from '../assets/logo.png';

// This is defineComponent in Vue render function.
// You can refer to document: https://vuejs.org/guide/extras/render-function.html
// See HelloWorld.tsx for functional components demo.
export default defineComponent({
  setup() {
    onMounted(() => ElMessage.warning(<p>You have <b>Successfully</b> run this demo.</p>));
    return () => (
      <>
        <img src={logo} />
        <HelloWorld msg="Hello ovx"/>
      </>
    );
  }
});
