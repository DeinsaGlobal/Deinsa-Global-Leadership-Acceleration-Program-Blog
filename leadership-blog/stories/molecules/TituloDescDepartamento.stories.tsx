import type { Meta, StoryObj } from '@storybook/react'
import { TTDesc } from '@/components/molecules/TituloDescDepartamento'

const meta: Meta<typeof TTDesc> = {

    title: 'Card departamento',
    component: TTDesc,
    tags: ['autodocs'],
    
};

export default meta;
type Story = StoryObj<typeof TTDesc>;

export const RAndD: Story = {
    args: {
        iconSrc: '/icons/research-icon.png',
        iconAlt: 'icono de R&D',
        title: 'Research & Development',
        desc: 'Investigación e innovación tecnológica. Explora nuevas tecnologías y metodologías para mantener a la empresa a la vanguardia del sector',
    },
};



