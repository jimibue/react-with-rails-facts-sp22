class AddBamToFacts < ActiveRecord::Migration[6.1]
  def change
    add_column :facts, :bam, :string
  end
end
