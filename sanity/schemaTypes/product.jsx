export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Product name',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Product description',
      type: 'string',
    },
    {
      name: 'price',
      title: 'Product price',
      type: 'string',
    },
    {
      name: 'price_id',
      title: 'Stripe product price ID',
      type: 'string',
    },
    {
      name: 'images',
      title: 'Product image',
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ],
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'category'}],
        },
      ],
    },
  ],
}
