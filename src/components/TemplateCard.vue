<template>
    <div class="card">
        <div class="card-image" :style="{backgroundImage:`url(${imageUrl})`}">
        </div>
        <div class="card-details">
            <div class="card-deatails-tempname">{{templateName}}</div>
            <div class="card-details-edit">x</div>
        </div>
    </div>
</template>

<script>
export default{
    props:{
        imageUrl:{
            type:String,
            required:true,
        },
        templateName:{
            type:String,
            required:true,
        },
        lastUpdate:{
            type:String,
            required:true,
        },
    },
}
</script>

<style scoped lang="scss"> 
    .card{
        width:100%;
        height:12rem;
        position: relative;
        border-radius: 0.5rem;
        color: $shade-four;
        overflow: hidden;
        border-radius: 1rem;
        box-shadow: 0.5rem 0.5rem 1rem rgba($black,0.3);
        &-image{
            position: absolute;
            top:0;
            left:0;
            height:100%;
            width:100%;
            background-size: cover;
            background-position: center;
        }
        &-details{
            position: absolute;
            bottom:0;
            left:0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 30%;
            width: 100%;
            padding: 0 0.5rem 0 0.5rem;
            background-color:$tint-two;
            &-tempname{
            }               
            &-edit{

            }
        }
    }

    @media(min-width:440px){
        .card{
            height:14rem;
            font-size: 1.4rem;
        }
    }
       @media(min-width:500px){
        .card{
            height:15rem;
            font-size: 1.6rem;
        }
    }
       @media(min-width:1080px){
        .card{
            height:17rem;
            &-details{
                padding: 0 1rem 0 1rem;
            }
        }
    }

    @media(min-width:1440px){
        .card{
            height:20rem;
            &-details{
                padding: 0 1.5rem 0 1.5rem;
            }
        }
    }
     @media(min-width:1440px){
        .card{
            height:22rem;
            &-details{
                padding: 0 2rem 0 2rem;
            }
        }
    }
</style>