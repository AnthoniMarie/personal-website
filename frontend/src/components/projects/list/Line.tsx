import * as React from "react"
import {
    Link,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Button,
    Progress,
    Badge
} from '@chakra-ui/react';

import {ViewIcon} from "@chakra-ui/icons";

const Line = ({data}) => {
    const ConditionalState = (data) => {
        if (data.state == "todo") {
            return (<Badge>Planifié</Badge>
            )
        }
        else if (data.state == "doing") {
            return (<Badge colorScheme='purple'>En cours</Badge>)
        }
        else if (data.state == "done") {
            return (<Badge colorScheme='green'>Terminé</Badge>)
        }
        else
            return (<></>)
    }
    return (
        <>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>Nom du projet</Th>
                        <Th>Progression du projet</Th>
                        <Th>Statut du projet</Th>
                        <Th>Options</Th>
                    </Tr>
                </Thead>
                <Tbody>
            {data && data.map((item, index) =>
                <Tr key={index}>
                    <Td>{item.attributes.title}</Td>
                    <Td><Progress value={item.attributes.progression}/></Td>
                    <Td><ConditionalState state={item.attributes.state}/></Td>
                    <Td><Link href={"/work/details/" + item.attributes.slug} textDecoration="none" _hover={{ textDecoration: 'none' }}><Button leftIcon={<ViewIcon/>} backgroundColor='#6e695e' variant='solid'>Voir</Button></Link></Td>
                </Tr>
            )}
                </Tbody>
            </Table>
        </>
    );
}

export default Line;