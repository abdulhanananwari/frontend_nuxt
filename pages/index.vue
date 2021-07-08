<template>
  <button class="btn btn-success" @click="getTokenSnap">Bayar</button>
</template>

<script>
export default {


methods: {
  getTokenSnap(){
      return this.$axios
        .post(`/api/payment-gateway/generate-token-snap`)
        .then((response) => {
          console.log(response.data.data.token)
            this.snapUrl = response.data.data.token;
             snap.pay(this.snapUrl,{
                onSuccess: function(result){
                  alert('Pembayaran Berhasil !')
                  window.location.reload();
                },
                onPending: function(result){
                  alert('Pembayaran Pending !')
                  window.location.reload();
                },
                onError: function(result){
                 alert('Pembayaran Gagal !')
                  window.location.reload();
                },
                onClose: function(){
                  console.log('customer closed the popup without finishing the payment');
                }

             })
        });
    },
  }
}
</script>
