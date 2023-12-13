const { createApp } = Vue;

createApp ({
    data() {

        return {

            mailLista: [
                
            ],
            

            
        }
    },


    methods: {
        
    },

    mounted() {


        for (let i = 0; i < 10; i++){

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((printa) => {

                console.log(printa.data.response);
                this.mailLista.push( printa.data.response);
                
                
            });
            
          

        }
        //this.mailLista.push( printa.data.response)

    },  
}).mount("#app");

