<template>
  <div class="container">
    <div class="row justify-content-center my-5">
      <div class="col-md-8 mt-3 my-5">
        <div class="card card-widget widget-user">
          <!-- Add the bg color to the header using any of the bg-* classes -->
          <div class="widget-user-header" style="background-image: ;">
          </div>
          <div class="widget-user-image">
            <img class="img-circle my-3" src="" alt="User Avatar">
            <p>username</p>
            <p>e-mail</p>
          </div>
          <div class="card-footer">
            <div class="row">
              <div class="col-sm-4 border-right">
                <div class="description-block">
                  <h5 class="description-header">like genre's count</h5>
                  <span class="description-text">genre</span>
                </div>
                <!-- /.description-block -->
              </div>
              <!-- /.col -->
              <div class="col-sm-4 border-right">
                <div class="description-block">
                  <h5 class="description-header">like locations' count</h5>
                  <span class="description-text">location</span>
                </div>
                <!-- /.description-block -->
              </div>
              <!-- /.col -->
              <div class="col-sm-4">
                <div class="description-block">
                  <h5 class="description-header">comments' count</h5>
                  <span class="description-text">comments</span>
                </div>
                <!-- /.description-block -->
              </div>
              <!-- /.col -->
            </div>
            <!-- /.row -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Profile',
}
</script>

<style>
.widget-user-header{
  background-position: center center;
  background-size: cover;
  height: 250px;
}
</style>