import { Injectable } from '@nestjs/common';
import { PublicationEntity } from '../publication.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PublicationService {

    constructor(
        @InjectRepository(PublicationEntity)
        private readonly publicationRepository: Repository<PublicationEntity>)
        {}
    
        findAll(): Promise<PublicationEntity[]> {
            return this.publicationRepository.find();
            }
    
        save(publication: PublicationEntity): Promise<PublicationEntity> {
            return this.publicationRepository.save(publication);
            }
    
        findById(id: number): Promise<PublicationEntity> {
            return this.publicationRepository.findOne(id);
            }
    
        async delete(id: number): Promise<PublicationEntity> {
            const objeto = await this.publicationRepository.findOne(id);
            return this.publicationRepository.remove(objeto);
            }
}
