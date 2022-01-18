<script setup lang="ts">
import { ref } from "vue";

const isShowVersion = ref(true);

const props = defineProps({
  dataArr: {
    type: Array,
    required: false,
    default: ()=>[],
  },
  versionActive: {
     type: String,
     required: true,
  }
});

const {versionActive} = props;

const onSelectVersion = (item)=>{
    console.log("ffff", item)
}
</script>

<template>
  <div class="version versionBig">
    <span>{{ versionActive }}</span
    ><img class="icon" style="width=10px;" src="/images/jianTou.svg" alt="" />
    <ul class="downDrap">
      <li
        :class="versionActive === item ? 'active' : ''"
        @click="onSelectVersion(item)"
        v-for="item in dataArr"
        :key="item"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.version {
  font-family: Inter;
  font-style: normal;
  display: flex;
  position: fixed;
  left: 0;
  bottom: 0;
  z-index: 30;
  width: calc(var(--sidebar-width) - 1px);
  height: 58px;
  border-top: 1px solid #e6e6e6;
  border-right: 1px solid #e6e6e6;
  /* line-height: 58px; */
  align-items: center;
  justify-content: center;
  background: #ffffff;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  color: #526081;
  .icon {
    margin-left: 6px;
  }
  .downDrap {
    display: none;
    position: absolute;
    bottom: 60px;
    left: 20px;
    background: #ffffff;
    box-sizing: border-box;
    padding: 0;
    box-shadow: 0px 2px 8px 1px rgba(7, 30, 48, 0.1);
    border-radius: 6px;
    padding: 6px 0;
    width: 220px;
    li {
      padding: 0 12px;
      background: #ffffff;
      height: 40px;
      line-height: 40px;
      box-sizing: border-box;
      margin-bottom: 2px;
      &:hover {
        background: #ebf2ff;
        cursor: pointer;
      }
      &:last-child {
        margin-bottom: 0px;
      }
    }
  }
  &:hover {
    .icon {
      transform: rotate(180deg);
    }
    .downDrap {
      display: block;
    }
  }
}
</style>
