<template lang="">
    <div>
        77777777777777777777777777
    </div>
</template>

<script>
export default {
    mounted(){
        console.log('================child====================');
        console.log(this.RxVuex.subscribe(this).on())
        console.log('====================================');
    }
}
</script>