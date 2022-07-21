<template>
  <footer class="footer">
    <form action="send" class="form">
      <label for="input" class="label">
        Подпишитесь на нашу рассылку <br />
        и узнавайте о акция быстрее
      </label>
      <input
        placeholder="Введите ваш e-mail:"
        type="text"
        class="form__input"
      />
      <button class="form__btn">отправить</button>
    </form>

    <ul class="info">
      <li class="info__title">Информация</li>
      <li class="info__option">О компании</li>
      <li class="info__option">Контакты</li>
      <li class="info__option">Акции</li>
      <li class="info__option">Магазины</li>
    </ul>

    <ul class="info">
      <li class="info__title">Интернет-магазин</li>
      <li class="info__option">Доставка и самовывоз</li>
      <li class="info__option">Оплата</li>
      <li class="info__option">Возврат-обмен</li>
      <li class="info__option">Новости</li>
    </ul>

    <ul class="social-medias">
      <li class="social-medias__link"><instagramIcon /></li>
      <li class="social-medias__link"><vkIcon /></li>
      <li class="social-medias__link"><facebookIcon /></li>
      <li class="social-medias__link"><youtubeIcon /></li>
    </ul>
  </footer>
</template>

<script>
import youtubeIcon from "@/assets/svg/youtubeIcon.vue";
import vkIcon from "@/assets/svg/vkIcon.vue";
import facebookIcon from "@/assets/svg/facebookIcon.vue";
import instagramIcon from "@/assets/svg/instagramIcon.vue";

export default {
  components: {
    youtubeIcon,
    vkIcon,
    facebookIcon,
    instagramIcon,
  },
};
</script>

<style scoped>
.footer {
  height: 232px;
  margin-top: 100px;
  background: #f0f0f4;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.label {
  display: block;
  margin-bottom: 34px;
  font-family: "SF Pro Display";
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
}

.form__input {
  padding: 8px 12px 8px 12px;
  background: #ffffff;
  border: none;
  outline: none;
}

.form__btn {
  cursor: pointer;
  padding: 10px 16px 10px 16px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-family: "SF Pro Display";
  font-weight: 400;
  font-size: 11px;
  background: #1c62cd;
  color: white;
  border: none;
}

.info {
  list-style: none;
  font-size: 14px;
}
.info__title {
  cursor: default;
  font-weight: 700;
}
.info__option {
  cursor: pointer;
  margin-top: 6px;
}

.social-medias {
  list-style: none;
}

.social-medias__link {
  cursor: pointer;
  display: inline-block;
  width: 30px;
  height: 30px;
  margin-right: 30px;
}

.social-medias__link:last-child {
  margin-right: 0;
}
</style>
