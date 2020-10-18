export default interface NgxFollowBtnOptions {
  /**
   * Set to false to hide the username of the specified account
   */
  showScreenName?: boolean;

  /**
   * Set to false to hide the number of accounts following the specified account
   */
  showCount?: boolean;

  /**
   * Set to large to display a larger button
   */
  size?: string;

  /**
   * A supported Twitter language code.
   */
  lang?: string;

  /**
   * When set to true, the button and its embedded page on your site
   * are not used for purposes that include personalized suggestions and personalized ads.
   */
  dnt?: boolean;
}
