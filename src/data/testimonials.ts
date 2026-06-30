export interface Testimonial {
  id: number;
  name: string;
  review: string;
  rating: number; // 1-5
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Adaobi O.',
    review:
      "The catfish pepper soup took me straight back to my grandmother's kitchen in Enugu. The spice level was perfect!",
    rating: 5,
  },
  {
    id: 2,
    name: 'Tunde A.',
    review:
      'Lagos Hot is no joke! My taste buds are still tingling. Best pepper soup I’ve had outside of a buka.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Chioma E.',
    review:
      'The build-your-own-bowl option is genius. I love that I can add plantain and yam. Already ordered three times this month!',
    rating: 5,
  },
];