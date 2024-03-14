<template>
  <div class="container mt-4">
    <div class="col-md-12 col-lg-12">
      <form>
        <div class="row mt-2">
          <div class="col-4">
            <label for="dateMask" class="form-label">Date</label>
            <input v-mask:date type="text" class="form-control" id="dateMask" placeholder="00/00/0000" value="">
          </div>
          <div class="col-4">
            <label for="timeMask" class="form-label">Time</label>
            <input v-mask:time type="text" class="form-control" id="timeMask" placeholder="00:00:00" value="">
          </div>
          <div class="col-4">
            <label for="dateTimeMask" class="form-label">Date & Time</label>
            <input v-mask:date_time type="text" class="form-control" id="dateTimeMask" placeholder="00/00/0000 00:00:00" value="">
          </div>
        </div>

        <div class="row mt-2">
          <div class="col-4">
            <label for="cepMask" class="form-label">Cep</label>
            <input v-mask:cep type="text" class="form-control" id="cepMask" placeholder="00000-000" value="">
          </div>
          <div class="col-4">
            <label for="phoneMask" class="form-label">Phone</label>
            <input v-mask:phone type="text" class="form-control" id="phoneMask" placeholder="0000-0000" value="">
          </div>
          <div class="col-4">
            <label for="phoneDddMask" class="form-label">Phone with DDD</label>
            <input v-mask:phone_ddd type="text" class="form-control" id="phoneDddMask" placeholder="(00) 0000-0000" value="">
          </div>
        </div>

        <div class="row mt-2">
          <div class="col-4">
            <label for="phone_us" class="form-label">Phone US</label>
            <input v-mask:phone_us type="text" class="form-control" id="phone_us" placeholder="(000) 000-0000" value="">
          </div>
          <div class="col-4">
            <label for="mixed" class="form-label">Mixed</label>
            <input v-mask:mixed type="text" class="form-control" id="mixed" placeholder="AAA 000-S0S" value="">
          </div>
          <div class="col-4">
            <label for="ip_address" class="form-label">IP Address</label>
            <input v-mask:ip_address type="text" class="form-control" id="ip_address" placeholder="099.099.099.099" value="">
          </div>
        </div>

      </form>
    </div>
  </div>
</template>