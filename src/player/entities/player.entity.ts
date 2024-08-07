import {
  Collection,
  Entity,
  EntityRepositoryType,
  OneToMany,
} from '@mikro-orm/core';
import { Asset } from 'src/asset/entities/asset.entity';
import { BaseEntity } from 'src/common/base.entity';
import { Referral } from 'src/referral/entites/referral.entity';
import { PlayerRepository } from '../player.repository';

@Entity({ repository: () => PlayerRepository })
export class Player extends BaseEntity {
  [EntityRepositoryType]?: PlayerRepository;
  @OneToMany(() => Asset, (asset) => asset.player)
  assets = new Collection<Asset>(this);
  constructor(id: number) {
    super(id);
  }

  @OneToMany(() => Referral, (referral) => referral.referrer)
  referrals = new Collection<Referral>(this);
}
