import type { Meta, StoryObj } from '@storybook/react'
import { TituloDepData } from '@/components/molecules/DepTD' 
import { title } from 'process';

const meta: Meta<typeof TituloDepData> = {
    title: 'Features/Department Card',
    component: TituloDepData,
}

export default meta;
type Story = StoryObj<typeof TituloDepData>

export const DTP: Story = {
    args: {
        departmentId: 1
    },
    parameters: {
        trpc: {
            department: {
                getOne: {
                    isLoading: false,
                    data: {id: 1, name: 'Research & Development', iconURL: '/icons/'}
                },
                getPostsByDepartmentId: {
                    isLoading: false,
                    data: [
                        {id: 101, title: 'P'},
                        {id: 102, title: 'B'},
                    ]
                }
            }
        }
    }
}
