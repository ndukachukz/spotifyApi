interface FollowersObject {
  /**
   * A link to the Web API endpoint providing full details of the followers; `null` if not available.
   * Please note that this will always be set to `null`, as the Web API does not support it at the moment.
   */
  href: null;
  /**
   * The total number of followers.
   */
  total: number;
}

interface ImageObject {
  /**
   * The image height in pixels. If unknown: `null` or not returned.
   */
  height?: number | undefined;
  /**
   * The source URL of the image.
   */
  url: string;
  /**
   * The image width in pixels. If unknown: null or not returned.
   */
  width?: number | undefined;
}

interface User {
  country: string;
  display_name?: string | undefined;
  email: string;

  external_urls: {
    spotify: string;
  };

  followers: FollowersObject | undefined;
  href: string | null;
  id: string | null;
  images: ImageObject[] | undefined;
  product: string | null;
  type: "user";
  uri: string;
}

export default User;
