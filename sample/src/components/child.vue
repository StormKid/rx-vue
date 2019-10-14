<template lang="">
    <div>
        77777777777777777777777777
    </div>
</template>

<script>
export default {
    mounted(){
        console.log('================child====================');
        console.log(this.RxVuex.subject.cache.get('yuanzi'));
        console.log('====================================');
    }
}
</script>