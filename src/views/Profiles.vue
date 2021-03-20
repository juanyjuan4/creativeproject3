<template>
<div class="profiles">
    <h1>Profiles</h1>
    <div v-for="profile in profiles" :key="profile.username" class="profile">
        <div class="identityp">
            <div class="namep">
                <p class="subtitle">Name</p>
                <p>{{ profile.name }}</p>
            </div>
            <div class="usernamep">
                <p class="subtitle">Username</p>
                <p>{{ profile.username }}</p>
            </div>
        </div>
        <div class="img">
            <p class="subtitle">Avatar</p>
            <img :src="profile.img.id">
        </div>
        <div class="biop">
            <p class="subtitle">Bio</p>
            <p>{{ profile.bio }}</p>
        </div>
        <hr v-if="profile.username != profiles[profiles.length - 1].username">
    </div>
</div>
</template>

<script>
export default {
    name: 'profiles',
    computed: {
        profiles() {
            return this.$root.$data.profileList;
        }
    },
}
</script>

<style>
.namep {
    display: flex;
    justify-content: space-between;
}

.namep p {
    margin: 10px;
}

.usernamep {
    display: flex;
    justify-content: space-between;
}

.usernamep p {
    margin: 10px;
}

.img {
    text-align: right;
}

.img p {
    text-align: left;
    margin-left: 10px;
}

.img img {
    max-width: 200px;
    max-height: 200px;
    margin-right: 10px;
}

.biop {
    display: flex;
    justify-content: space-between;
}

.biop p {
    margin: 10px;
    text-align: right;
}

.subtitle {
    font-weight: bold;
}

hr {
    margin-top: 20px;
    margin-bottom: 20px;
}

@media only screen and (min-width: 401px) and (max-width: 960px) {
    .profiles {
        max-width: 500px;
        margin: auto;
    }
}

@media only screen and (min-width: 961px) {
    .profiles {
        max-width: 600px;
        margin: auto;
    }

    .identityp {
        display: flex;
        justify-content: space-between;
    }

    .namep p, .usernamep p {
        margin: 10px;
    }

    .img img {
        max-width: 300px;
        max-height: 300px;
    }
}
</style>