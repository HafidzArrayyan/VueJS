<template>
    <div>
        <b-navbar toggleable="sm" type="light" variant="dark">
            <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
            <!-- <b-navbar-brand>MyApps</b-navbar-brand> -->
            <img src="assets/img/logo.svg">
            <b-collapse id="nav-text-collapse" is-nav>
            <b-navbar-nav class="ml-auto p-1 ">
              <b-nav-item href="">
                <li class="nav-item">
                  <!-- <a class="nav-link" href="index.html"> -->
                  <router-link to="/" class="nav-link">
                    <i class="mdi mdi-view-dashboard-outline menu-icon text-white"></i>
                    <span class="menu-title text-white">Beranda</span>
                  <!-- </a> -->
                  </router-link>
                </li>
              </b-nav-item>
              <b-nav-item href="">
                <li class="nav-item">
                  <!-- <a class="nav-link" to="/petugasTatib"> -->
                  <router-link to="/petugasTatib" class="nav-link">
                    <i class="mdi mdi-account-settings menu-icon text-white"></i>
                     <span class="menu-title text-white">Petugas Tatib</span>
                     </router-link>
                  <!-- </a> -->
                </li>
              </b-nav-item>
              <b-nav-item href="">
                <li class="nav-item">
                  <!-- <a class="nav-link" to="/petugasTatib"> -->
                  <router-link to="/dataSiswa" class="nav-link">
                    <i class="mdi mdi-file-document-box-outline menu-icon text-white"></i>
                     <span class="menu-title text-white">Data Siswa</span>
                     </router-link>
                  <!-- </a> -->
                </li>
              </b-nav-item>
              <b-nav-item href="">
                <li class="nav-item">
                  <!-- <a class="nav-link" to="/petugasTatib"> -->
                  <router-link to="/dataPelanggaran" class="nav-link">
                    <i class="mdi mdi-codepen menu-icon text-white"></i>
                     <span class="menu-title text-white">Pelanggaran</span>
                     </router-link>
                  <!-- </a> -->
                </li>
              </b-nav-item>
              <b-nav-item href="">
                <li class="nav-item">
                  <!-- <a class="nav-link" to="/petugasTatib"> -->
                  <router-link to="/inputPelanggaran" class="nav-link">
                    <i class="mdi mdi-puzzle-outline menu-icon text-white"></i>
                     <span class="menu-title text-white">Input Pelanggaran</span>
                     </router-link>
                  <!-- </a> -->
                </li>
              </b-nav-item>
              <b-nav-item href="">
                <li class="nav-item">
                  <!-- <a class="nav-link" to="/petugasTatib"> -->
                  <router-link to="/poinSiswa" class="nav-link">
                    <i class="mdi mdi-image-filter menu-icon text-white"></i>
                     <span class="menu-title text-white">Poin Siswa</span>
                     </router-link>
                  <!-- </a> -->
                </li>
              </b-nav-item>
              <b-nav-item href="">
                <li class="nav-item">
                  <!-- <a class="nav-link" href="/logout"> -->
                  <router-link to="/login" class="nav-link">
                    <i class="mdi mdi-logout text-primary"></i>
                    <span class="menu-title text-white">Logout</span>
                  <!-- </a> -->
                  </router-link>
                </li>
              </b-nav-item>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
