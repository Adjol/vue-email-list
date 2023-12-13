const { createApp } = Vue;

createApp ({
    data() {

        return {
            mailLista: [],
            

            // x: console.log(mailLista)
        }
    },


    methods: {
        
    },

    mounted() {


        for (let i = 0; i < 10; i++){

            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((print) => {

                console.log(print.data.response);
                
                
                
            });
            
            this.mailLista.push({
                mail: this.print
            })

        }

        
    },  
}).mount("#app");

