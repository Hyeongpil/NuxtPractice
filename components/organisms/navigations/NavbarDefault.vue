<template>
  <div class="flex justify-between items-center">
    <b-navbar-item tag="router-link" :to="{ path: '/' }" class="bg-transparent">
      <img src="~assets/images/logo/logo-default.png" alt="Buefy" height="28" />
    </b-navbar-item>

    <div class="flex items-center">
      <!-- 계정 등급 -->
      <b-tag
        rounded
        type="is-secondary"
        class="text-primary px-5 invisible sm:visible text-xs font-medium"
      >
        무료
      </b-tag>

      <b-dropdown v-model="navigation" aria-role="menu">
        <a
          slot="trigger"
          class="navbar-item bg-transparent flex items-center"
          role="button"
        >
          <!-- 이름 -->
          <inline-text text="홍길동님" class="text-sm font-bold mr-2" />

          <!-- 로그인 아이콘 -->
          <img
            src="~assets/images/icons/icon-user-logged-in.png"
            alt="Buefy"
            height="28"
          />
        </a>

        <b-dropdown-item custom aria-role="menuitem">
          Logged as <b>Rafael Beraldo</b>
        </b-dropdown-item>
        <hr class="dropdown-divider" />
        <b-dropdown-item has-link aria-role="menuitem">
          <a href="https://google.com" target="_blank">
            <b-icon icon="link"></b-icon>
            Google (link)
          </a>
        </b-dropdown-item>
        <b-dropdown-item value="home" aria-role="menuitem">
          <b-icon icon="home"></b-icon>
          Home
        </b-dropdown-item>
        <b-dropdown-item value="products" aria-role="menuitem">
          <b-icon icon="cart"></b-icon>
          Products
        </b-dropdown-item>
        <b-dropdown-item value="blog" disabled aria-role="menuitem">
          <b-icon icon="book-open"></b-icon>
          Blog
        </b-dropdown-item>
        <hr class="dropdown-divider" aria-role="menuitem" />
        <b-dropdown-item value="settings">
          <b-icon icon="settings"></b-icon>
          Settings
        </b-dropdown-item>
        <b-dropdown-item value="logout" aria-role="menuitem">
          <b-icon icon="logout"></b-icon>
          Logout
        </b-dropdown-item>
      </b-dropdown>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component({})
export default class NavbarDefault extends Vue {
  getFalse() {
    return false
  }
}
</script>
