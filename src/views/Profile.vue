<template>
  <div class="container">
    <div class="row align-items-center profile-header">
      <div class="col-md-2 mb-3">
        <img
          :src="$hAuth.getUserProfile().pictureUrl"
          alt="User's profile picture"
          class="rounded-circle img-fluid profile-picture"
        />
      </div>
      <div class="col-md text-center text-md-left">
        <h2>{{ $hAuth.getUserProfile().name }}</h2>
        <p class="lead text-muted">{{ $hAuth.getUserProfile().email }}</p>
      </div>
    </div>

    <div class="row">
      <pre v-highlightjs="JSON.stringify($hAuth.getUserProfile(), null, 2)" class="rounded w-100"><code class="json"></code></pre>
    </div>
  </div>
</template>
<script>
export default {
  name: "profile"
};
</script>

