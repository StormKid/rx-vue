<template lang="">
    <div>
        77777777777777777777777777
    </div>
</template>

<script>

export default {
    mounted(){
        console.log('==================children==================');
        console.log(localStorage.getItem('RX-VUEX'));
        console.log('====================================');
           console.log('==================children==================');
        console.log(this.cache);
        console.log('====================================');
    }
}
</script>