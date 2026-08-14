import type { Testimonial } from '@/types'

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'testimonial-1',
    customerName: 'James W.',
    serviceReceived: 'Tree Felling',
    rating: 5,
    reviewText:
      'Absolutely brilliant service from start to finish. The team came out to our property in Woolton and removed a large oak that had been causing damage to our garden wall. They worked efficiently, kept the site incredibly tidy, and were mindful of our neighbours throughout. Couldn\'t fault them — will definitely use Evergreen Arbor again.',
  },
  {
    id: 'testimonial-2',
    customerName: 'Sarah T.',
    serviceReceived: 'Crown Reduction',
    rating: 5,
    reviewText:
      'We had a massive sycamore overhanging our roof in Aigburth that needed serious attention. The lads from Evergreen Arbor assessed it thoroughly, explained exactly what they\'d do, and carried out the crown reduction beautifully. The tree looks so much healthier now and we no longer worry about branches coming down in a storm. Highly recommend.',
  },
  {
    id: 'testimonial-3',
    customerName: 'David M.',
    serviceReceived: 'Stump Grinding / Stump Removal',
    rating: 5,
    reviewText:
      'Had three old stumps taking up space in our back garden in Crosby that previous contractors had left behind. Evergreen Arbor brought their grinder in and had them all cleared within a couple of hours. The area was levelled off neatly afterwards and they swept up every last bit of wood chip. Prompt, professional, and very reasonably priced for the Merseyside area.',
  },
  {
    id: 'testimonial-4',
    customerName: 'Karen B.',
    serviceReceived: 'Hedge Trimming and Shaping',
    rating: 4,
    reviewText:
      'Our mature leylandii hedge along the boundary of our Formby garden had got well out of hand over the years. The team from Evergreen Arbor shaped it up beautifully and cleared all the waste the same day. Would give five stars but it took a couple of days longer to schedule than originally quoted. The work itself was spot on and the hedge looks superb.',
  },
  {
    id: 'testimonial-5',
    customerName: 'Michael O.',
    serviceReceived: 'Emergency Tree Surgery',
    rating: 5,
    reviewText:
      'A large branch came down on our fence during the storms in January, blocking our driveway in Wavertree. I rang Evergreen Arbor at 8 in the morning and they were with us by early afternoon — far quicker than I expected. They made the tree safe, removed all the debris, and even checked the remaining limbs for any further risk. Fantastic emergency response.',
  },
  {
    id: 'testimonial-6',
    customerName: 'Rachel H.',
    serviceReceived: 'Tree Pruning',
    rating: 5,
    reviewText:
      'I\'ve used a few tree surgeons over the years across Merseyside and Evergreen Arbor are by far the best I\'ve come across. They pruned our apple and cherry trees in Childwall with real expertise, explaining which cuts would encourage fruiting and which deadwood needed removing for health. PPE was worn throughout and they left the garden spotless. A proper professional outfit.',
  },
  {
    id: 'testimonial-7',
    customerName: 'Tom F.',
    serviceReceived: 'Crown Thinning',
    rating: 5,
    reviewText:
      'Our large beech at the front of our house in West Kirby, Wirral, was blocking so much light it was affecting the rooms inside. Evergreen Arbor came out, assessed it carefully, and completed the crown thinning in a single day. The difference in light is remarkable and the tree still looks natural and well-balanced. All green waste was chipped and taken away. Very pleased.',
  },
  {
    id: 'testimonial-8',
    customerName: 'Louise P.',
    serviceReceived: 'Tree Planting and Aftercare',
    rating: 4,
    reviewText:
      'Commissioned Evergreen Arbor to plant a row of silver birches along our garden boundary in Huyton, Knowsley. They advised on the best spacing and species for our soil type, supplied healthy stock, and staked everything properly. They also put together a clear aftercare plan for the first growing season. Four stars only because one of the trees needed a replacement, but they sorted it without any fuss.',
  },
  {
    id: 'testimonial-9',
    customerName: 'Neil C.',
    serviceReceived: 'Arboricultural Surveys and Reports',
    rating: 5,
    reviewText:
      'Needed an arboricultural survey for planning permission on our extension in Mossley Hill. Evergreen Arbor produced a thorough BS 5837 report within a week, clearly identifying all protected trees and their root protection areas. The planning officer accepted it without any queries. Professional, knowledgeable, and their report was clearly written by someone who knows their stuff inside out.',
  },
]

export const AGGREGATE_RATING = {
  ratingValue: (
    TESTIMONIALS.reduce((sum, t) => sum + t.rating, 0) / TESTIMONIALS.length
  ).toFixed(1),
  reviewCount: TESTIMONIALS.length,
}
