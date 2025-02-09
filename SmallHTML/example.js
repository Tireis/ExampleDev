import * as figma from '@figma/code-connect'

figma.connect(Button, 'https://...', {
  props: {
    label: figma.string('Text Content'),
    disabled: figma.boolean('Disabled'),
    type: figma.enum('Type', {
      Primary: 'primary',
      Secondary: 'secondary',
    }),
  },
  example: ({ disabled, text, type }) => {
    return (
      <Button disabled={disabled} type={type}>
        {text}
      </Button>
    )
  },
})