<template>
    <div class="card">
        <div class="card-image" :style="{backgroundImage:`url(${imageUrl})`}">
        </div>
        <div class="card-lastupdate">Last Update on : {{lastUpdate}}</div>
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
        background-color: $light-three;
        border-radius: 0.5rem;
        color: $shade-four;
        &-lastupdate{
            position: absolute;
            top:0;
            right:0;
            width: 100%;
            text-align:right;
            background-color: rgba($tint-two,0.4);
            padding: 0 0.5rem 0 0.5rem;
            font-size: 0.8rem;
        }
        &-image{
            position: absolute;
            top:0;
            left:0;
            height:100%;
            width:100%;
            background-size: cover;
        }
        &-details{
            position: absolute;
            bottom:0;
            left:0;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 25%;
            width: 100%;
            padding: 0 0.5rem 0 0.5rem;
            background-color: rgba($primary,0.4);
            &-tempname{
            }               
            &-edit{

            }
        }
    }
</style>