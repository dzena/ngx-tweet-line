export default interface NgxTweetBtnOptions {
  /**
   * Pre-populated text highlighted in the Tweet composer.
   * custom share text
   */
  text?: string;

  /**
   * A comma-separated list of hashtags to be appended to default Tweet text
   */
  hashtags?: string[];

  /**
   * Attribute the source of a Tweet to a Twitter username
   */
  via?: string;

  /**
   * A comma-separated list of accounts related to the content of the shared URI.
   */
  related?: string[];

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
